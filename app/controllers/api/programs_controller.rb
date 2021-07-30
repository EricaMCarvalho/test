module Api
  class ProgramsController < ApplicationController
    def index
      @programs = Program.all
      render json: @programs
    end

    def show
      @program = Program.find(params[:id])
      render json: @program
    end

    def update
      @program = Program.find(params[:id])
      if @program.update(params.require(:program).permit(:name, :lockSubmitted, :multipleSubmissions, :confirmationText, :redirectUrl, :logoutUrl, :makeAnonymous, :scoreSharing))
        render json: @program
      else
        render json: {"error": "Failed to save changes"}
      end
    end
  end
end
