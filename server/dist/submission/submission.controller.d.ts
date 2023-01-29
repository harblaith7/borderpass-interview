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
}
export {};
