import { NotFoundException } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { Repository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/Create-board.dto';

export class BoardRepository extends Repository<Board> {
  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user,
    });

    await this.save(board);
    return board;
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Can't found Board with id ${id}`);
    }

    return found;
  }
}
