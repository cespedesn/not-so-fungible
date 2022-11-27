class CollectionSerializer < ActiveModel::Serializer
  attributes :id, :collection_name, :collection_description, :collection_rating
  has_many :nfts
end
