class CollectionSerializer < ActiveModel::Serializer
  attributes :id, :collection_name, :collection_description, :collection_rating
  has_many :nfts
  has_many :reviews, serializer: CollectionReviewsSerializer
end
