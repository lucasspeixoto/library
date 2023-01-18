class TReview {
  public id: number;
  public userEmail: String;
  public date: string;
  public rating: number;
  public bookId: number;
  public reviewDescription?: string;

  constructor(
    id: number,
    userEmail: String,
    date: string,
    rating: number,
    bookId: number,
    reviewDescription: string,
  ) {
    this.id = id;
    this.userEmail = userEmail;
    this.date = date;
    this.rating = rating;
    this.bookId = bookId;
    this.reviewDescription = reviewDescription;
  }
}

export default TReview;
