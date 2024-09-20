import { Controller, Get, Param, Delete, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/quotes')
  @Render('index')
  findAll() {
    return {
      quotes: this.appService.findAll()
    }
  }

  @Get('quote/:id')
  oneQuote(@Param('id') id: string) {
    return this.appService.oneQuote(+id);
  }

  @Delete('deleteQuote/:id')
  deleteQuote(@Param('id') id: string) {
    return this.appService.deleteQuote(+id);
  }

  @Get('randomQuote')
  randomQuote() {
    return this.appService.randomQuote();
  }

  @Get('topAuthor')
  topAuthor() {
    return this.appService.topAuthor();
  }
}
