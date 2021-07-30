class Program < ApplicationRecord
  validates :name, presence: true, length: { in: 3..50 }
  validates :lockSubmitted, :multipleSubmissions, :makeAnonymous, :scoreSharing, inclusion: [true, false]
  validates :confirmationText, presence: true, length: { minimum: 8 }
  validates :redirectUrl, :logoutUrl, allow_blank: true, format: { with: /\A(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,63}(:[0-9]{1,5})?(\/.*)?\z/ix, message: 'Please add a valid url' }
end