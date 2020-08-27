class Account < ApplicationRecord

	def self.search(search)
      if search
        Account.where(['year LIKE ?', "%#{search}%"])
      else
        Account.all
      end
    end

end
