import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { AccountService } from 'src/account/account.service';
import { BlockListService } from 'src/block-list/block-list.service';

@Injectable()
export class UsersService {
  constructor(
    private db: DbService,
    private accountService: AccountService,
    private blockListService: BlockListService,
  ) {}
  findByEmail(email: string) {
    return this.db.user.findFirst({ where: { email } });
  }
  async create(email: string, hash: string, salt: string) {
    const newUser = await this.db.user.create({ data: { email, hash, salt } });
    await this.accountService.create(newUser.id);
    await this.blockListService.create(newUser.id);
    return newUser;
  }
}
