import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';
import { IsIn, IsOptional } from 'class-validator';

const blockItemTypes = [
  $Enums.BlockItemType.KeyWord,
  $Enums.BlockItemType.Website,
];

export class BlockListQueryDto {
  @ApiProperty({ required: false })
  @IsOptional()
  q?: string;
}

export class BlockItemDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  blockListId: number;
  @ApiProperty({
    enum: blockItemTypes,
  })
  type: $Enums.BlockItemType;
  @ApiProperty()
  data: string;
  @ApiProperty()
  createdAt: Date;
}

export class BlockListDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  ownerId: number;
  @ApiProperty({
    type: [BlockItemDto],
  })
  items: BlockItemDto[];
}

export class AddBlockItemDto {
  @ApiProperty({
    enum: blockItemTypes,
  })
  @IsIn(blockItemTypes)
  type: $Enums.BlockItemType;
  @ApiProperty()
  data: string;
}
