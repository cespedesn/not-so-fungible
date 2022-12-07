class UserReviewsSerializer < ActiveModel::Serializer
  attributes :id, :review_title, :review_description, :review_rating
  has_one :user
end
