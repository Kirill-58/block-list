import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import {
  AddBlockItemDto,
  BlockItemDto,
  BlockListDto,
  BlockListQueryDto,
} from 'src/block-list/dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { SessionInfoDto } from 'src/auth/dto';
import { BlockListService } from 'src/block-list/block-list.service';
import { AccountDto } from 'src/account/dto';

@Controller('block-list')
@UseGuards(AuthGuard)
export class BlockListController {
  constructor(private blockListService: BlockListService) {}
  @Get()
  @ApiOkResponse({
    type: BlockListDto,
  })
  getList(
    @Query() query: BlockListQueryDto,
    @SessionInfo() sessionInfo: SessionInfoDto,
  ): Promise<BlockListDto> {
    return this.blockListService.getByUserId(sessionInfo.id, query);
  }

  @Post('item')
  @ApiCreatedResponse({
    type: BlockItemDto,
  })
  addBlockListItem(
    @Body() body: AddBlockItemDto,
    @SessionInfo() sessionInfo: SessionInfoDto,
  ): Promise<BlockItemDto> {
    return this.blockListService.addItem(sessionInfo.id, body);
  }

  @Delete('item/:id')
  @ApiOkResponse({ type: BlockItemDto })
  async deleteBlockListItem(
    @Param('id', ParseIntPipe) id: number,
    @SessionInfo() sessionInfo: SessionInfoDto,
  ): Promise<BlockItemDto> {
    return await this.blockListService.removeItem(sessionInfo.id, id);
  }
}
