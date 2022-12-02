class CollectionReviewsSerializer < ActiveModel::Serializer
  attributes :id, :review_title, :review_description, :review_rating
end
