"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let SubmissionController = class SubmissionController {
    async create({ firstName, lastName, email, phone, questionaireId, answers }) {
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
                    const answer = Object.assign(Object.assign({}, a), { question_id: a.questionId, submission_id: submission.id });
                    delete answer.questionId;
                    return answer;
                }),
            });
            return 'SUCCESS';
        });
    }
    async fetch() {
        return prisma.submission.findMany({
            select: {
                first_name: true,
                last_name: true,
                email: true,
                phone: true,
                answers: true,
                questionaire: true,
            },
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubmissionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubmissionController.prototype, "fetch", null);
SubmissionController = __decorate([
    (0, common_1.Controller)('submission')
], SubmissionController);
exports.SubmissionController = SubmissionController;
//# sourceMappingURL=submission.controller.js.map