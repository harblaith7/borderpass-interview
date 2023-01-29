const { PrismaClient, QUESTION_TYPE } = require('@prisma/client');
const prisma = new PrismaClient();

const seedDatabase = async () => {
  prisma.question.deleteMany();
  prisma.questionaire.deleteMany();

  const questionaire = await prisma.questionaire.create({
    data: {
      name: 'BorderPass',
    },
  });

  await prisma.question.createMany({
    data: [
      {
        title: 'Date of birth',
        question: 'When is your birthday?',
        questionType: QUESTION_TYPE.DATE,
        required: true,
        order: 1,
        options: undefined,
        questionaire_id: questionaire.id,
      },
      {
        title: 'Country of residence',
        question: 'What country do you live in?',
        questionType: QUESTION_TYPE.DROPDOWN,
        required: true,
        order: 2,
        options: ['Italy', 'United States of America', 'France', 'Turkey'],
        questionaire_id: questionaire.id,
      },
      {
        title: 'Canadian school',
        question:
          'Have you been accepted into a Canadian school, college, university, or other designated learning institution?',
        questionType: QUESTION_TYPE.RADIO,
        required: true,
        order: 3,
        options: [
          'Yes',
          "Yes, but I don't feel like type all that",
          "No, but I don't feel like type all that",
          'No',
        ],
        questionaire_id: questionaire.id,
      },
      {
        title: 'Province of study',
        question: 'Which province will you be studying in?',
        questionType: QUESTION_TYPE.DROPDOWN,
        required: false,
        order: 4,
        options: ['Alberta', 'Ontario', 'British Columbia', 'Nunavut'],
        questionaire_id: questionaire.id,
      },
      {
        title: 'Most recent studies',
        question: 'When did you complete your most recent studies?',
        questionType: QUESTION_TYPE.RADIO,
        required: false,
        order: 5,
        options: [
          'I am currently enrolled in a study program',
          'Less than 1 year ago',
          '1-2 years ago',
        ],
        questionaire_id: questionaire.id,
      },
    ],
  });
};

seedDatabase();
