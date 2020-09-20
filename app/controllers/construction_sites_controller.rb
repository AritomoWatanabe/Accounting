class ConstructionSitesController < ApplicationController

	def new
		@construction_site = ConstructionSite.new
		@construction_sites = ConstructionSite.all
	end

	def create
		@construction_site = ConstructionSite.new(construction_site_params)
		@construction_site.save
		redirect_to  new_construction_site_path
	end

	private
	def construction_site_params
		params.require(:construction_site).permit(:name)
	end

end
