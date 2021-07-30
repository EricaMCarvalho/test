class Program < ApplicationRecord
  validates :name, presence: true, length: { in: 3..50 }
  validates :lockSubmitted, :multipleSubmissions, :makeAnonymous, :scoreSharing, inclusion: [true, false]
  validates :confirmationText, presence: true, length: { minimum: 8, too_short: 'must be at least 8 characters long. ' }
  validates :redirectUrl, :logoutUrl, allow_blank: true, format: { with: /\A(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,63}(:[0-9]{1,5})?(\/.*)?\z/ix, message: 'is not valid. ' }
end