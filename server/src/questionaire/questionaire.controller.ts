import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Controller('questionaire')
export class QuestionaireController {
  @Get(':id')
  async getQuestionaire(@Param('id', ParseIntPipe) id: number) {
    const questionaire = await prisma.questionaire.findUnique({
      where: {
        id,
      },
    });

    if (!questionaire) {
      throw new NotFoundException('Cannot be questionaire');
    }

    const questions = await prisma.question.findMany({
      where: {
        questionaire_id: questionaire.id,
      },
      orderBy: {
        order: 'asc',
      },
    });

    return { ...questionaire, questions };
  }
}
