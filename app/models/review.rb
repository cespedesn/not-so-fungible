class Review < ApplicationRecord
  belongs_to :user
  belongs_to :collection
  validates_presence_of :review_title, :review_description, :review_rating
  validates :review_description, length: {minimum: 7}
  validates :review_title, length: {minimum: 3}
end
