class ExpenseDraft {

    private buyer: BusinessEntity;
    private seller: BusinessEntity;
    private amount: Money;
    private comment: string;

    updateBuyerInformation(newBuyer: BusinessEntity) {

    }
    updateSellerInformation(newBuyer: BusinessEntity) {

    }
    updateAmount(newAmount: Money) {

    }
    updateComment(comment: string) {

    }
    accept(): Expense {
        return new Expense(this.buyer, this.seller, this.amount, this.comment)
    }
}

class Expense {

    constructor(buyer: BusinessEntity, seller: BusinessEntity, amount: Money, comment: string) {
        this.buyer = buyer;
        this.seller = seller;
        this.amount = amount;
        this.comment = comment;
    }

    private readonly buyer: BusinessEntity;
    private readonly seller: BusinessEntity;
    private readonly amount: Money;
    private comment: string;

    updateComment(comment: string) {

    }

}

class BusinessEntity {

    name: string;
    lastname: string;
    address: string;
    vatNumber: string;

}

class Money {

    value: number;
    currency: string;

}
