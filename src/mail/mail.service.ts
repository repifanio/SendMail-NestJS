import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    teste(): string {
        return 'Isso é um teste';
    }
}
