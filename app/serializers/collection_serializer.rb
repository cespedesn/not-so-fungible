class CollectionSerializer < ActiveModel::Serializer
  attributes :id, :collection_name, :collection_description
  has_many :nfts
end
