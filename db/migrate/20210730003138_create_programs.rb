class CreatePrograms < ActiveRecord::Migration[6.1]
  def change
    create_table :programs do |t|
      t.string :name
      t.boolean :lockSubmitted
      t.boolean :multipleSubmissions
      t.text :confirmationText
      t.string :redirectUrl
      t.string :logoutUrl
      t.boolean :makeAnonymous
      t.boolean :scoreSharing

      t.timestamps
    end
  end
end
