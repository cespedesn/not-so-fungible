class Nft < ApplicationRecord
  belongs_to :collection
  has_many :reviews, dependent: :destroy
end
