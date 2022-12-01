class NftReviewsSerializer < ActiveModel::Serializer
  attributes :id, :review_title, :review_description, :review_rating
end
