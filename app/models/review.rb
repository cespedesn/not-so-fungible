class Review < ApplicationRecord
  belongs_to :user
  belongs_to :nfts 
  validates_presence_of :review_title, :review_description, :review_rating
  validates :review_description, length: {minimum: 7}
end
