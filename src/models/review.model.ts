import { AlbumModel } from './album.model'

export interface ReviewModel {
  album: AlbumModel
  reviewDate: string
  reviewText: string
}
