export class Category {
    categoryId: string;
    name: string;
    createdAt: Date;

    constructor(categoryId: string, name: string, createdAt: Date) {
        this.categoryId = categoryId;
        this.name = name;
        this.createdAt = createdAt;
    }
}
