import { Injectable } from '@nestjs/common';
import { tsquotes } from './quotes.js';

@Injectable()
export class AppService {
  private quotes = tsquotes;

  //

  findAll() {
    return this.quotes;
  }

  //

  randomQuote() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)].quote;
  }

  //

  topAuthor() {
    const authorMap = new Map<string, number>();

    this.quotes.forEach((quote) => {
      authorMap.set(quote.author, (authorMap.get(quote.author) || 0) + 1);
    });

    return Array.from(authorMap);
  }

  //

  oneQuote(id: number) {
    const user = this.quotes.find((quote) => quote.id === id);

    return user;
  }

  //

  deleteQuote(id: number) {
    const removedUser = this.oneQuote(id);

    return removedUser;
  }
}
