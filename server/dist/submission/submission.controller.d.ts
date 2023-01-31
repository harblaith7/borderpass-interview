import { Body } from '@nestjs/common';
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
export declare class SubmissionController {
    create({ firstName, lastName, email, phone, questionaireId, answers }: Body): Promise<string>;
    fetch(): Promise<{
        email: string;
        phone: string;
        answers: import(".prisma/client").Answer[];
        questionaire: import(".prisma/client").Questionaire;
        first_name: string;
        last_name: string;
    }[]>;
}
export {};
