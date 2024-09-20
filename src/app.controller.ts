import { Controller, Get, Param, Delete, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/quotes')
  @Render('index')
  findAll() {
    return {
      quotes: this.appService.findAll(),
    };
  }

  @Get('/quote/:id')
  @Render('findone')
  oneQuote(@Param('id') id: string) {
    return {
      theone: this.appService.oneQuote(+id),
    };
  }

  @Delete('deleteQuote/:id')
  deleteQuote(@Param('id') id: string) {
    return this.appService.deleteQuote(+id);
  }

  @Get('/randomQuote')
  @Render('random')
  randomQuote() {
    return {
      random: this.appService.randomQuote(),
    };
  }

  @Get('/topAuthor')
  @Render('topauth')
  topAuthor() {
    return {
      topauth: this.appService.topAuthor(),
    };
  }
}
