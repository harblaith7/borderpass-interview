import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionaireModule } from './questionaire/questionaire.module';
import { SubmissionModule } from './submission/submission.module';

@Module({
  imports: [QuestionaireModule, SubmissionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
