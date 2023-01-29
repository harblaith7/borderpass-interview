import { Body, Controller, Post } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
interface Body {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  questionaireId: number;
  answers: {
    questionId: number;
    value: string;
  }[];
}
@Controller('submission')
export class SubmissionController {
  @Post()
  async create(
    @Body()
    { firstName, lastName, email, phone, questionaireId, answers }: Body,
  ) {
    return await prisma.$transaction(async (tx) => {
      const submission = await tx.submission.create({
        data: {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          questionaire_id: questionaireId,
        },
      });

      await tx.answer.createMany({
        data: answers.map((a) => {
          const answer = {
            ...a,
            question_id: a.questionId,
            submission_id: submission.id,
          };
          delete answer.questionId;
          return answer;
        }),
      });

      return 'SUCCESS';
    });
  }
}
