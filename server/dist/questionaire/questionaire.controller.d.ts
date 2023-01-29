export declare class QuestionaireController {
    getQuestionaire(id: number): Promise<{
        questions: import(".prisma/client").Question[];
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
