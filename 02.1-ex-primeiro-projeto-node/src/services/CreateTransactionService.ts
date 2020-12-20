import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    const balance = this.transactionsRepository.getBalance();

    if(type === 'outcome' && value > (balance.income - balance.outcome)) {
      throw Error('You don\'t have enough income!');
    }

    const transaction = this.transactionsRepository.create({
      title,
      value,
      type
    })

    return transaction;
  }
}

export default CreateTransactionService;
