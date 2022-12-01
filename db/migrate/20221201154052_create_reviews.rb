class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :review_title
      t.string :review_description
      t.string :review_rating
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
