import { Module } from '@nestjs/common';
import { QuestionaireController } from './questionaire.controller';

@Module({
  controllers: [QuestionaireController]
})
export class QuestionaireModule {}
