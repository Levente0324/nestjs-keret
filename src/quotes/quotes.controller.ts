import { Controller, Delete, Get, Param } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller()
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get('quotes')
  findAll() {
    return this.quotesService.findAll();
  }

  @Get('quote/:id')
  oneQuote(@Param('id') id: string) {
    return this.quotesService.oneQuote(+id);
  }

  @Delete('deleteQuote/:id')
  deleteQuote(@Param('id') id: string) {
    return this.quotesService.deleteQuote(+id);
  }

  @Get('randomQuote')
  randomQuote() {
    return this.quotesService.randomQuote();
  }

  @Get('topAuthor')
  topAuthor() {
    return this.quotesService.topAuthor();
  }
}
