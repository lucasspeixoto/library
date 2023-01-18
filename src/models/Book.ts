class TBook {
  public id: number;
  public title: string;
  public author?: string;
  public copies?: number;
  public copiesAvailable?: number;
  public description?: string;
  public category?: string;
  public img?: string;

  constructor(
    id: number,
    title: string,
    author?: string,
    copies?: number,
    copiesAvailable?: number,
    description?: string,
    category?: string,
    img?: string,
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.copies = copies;
    this.copiesAvailable = copiesAvailable;
    this.description = description;
    this.category = category;
    this.img = img;
  }
}

export default TBook;
