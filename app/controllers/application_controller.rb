require 'pry'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get "/languages" do
    languages = Language.all
    languages.to_json(include: :dialects)
  end

  get "/languages/:id" do
    language = Language.find(params[:id])
    language.to_json(include: :dialects)
  end

  post "/languages" do
    language = Language.create(params)
    Language.all.to_json(include: :dialects)
  end

  patch "/languages/:id" do
    language = Language.find(params[:id])
    language.update(params)
    language.to_json(include: :dialects)
  end

  delete '/languages/:id' do
    language=Language.find(params[:id])
    language.destroy
    language.to_json
  end

  get "/dialects" do
    dialects = Dialect.all
    dialects.to_json
  end

  post "/dialects" do
    dialect = Dialect.create(params)
    dialect.to_json
  end

  patch "/dialects/:id" do
    dialect = Dialect.find(params[:id])
    dialect.update(params)
    dialect.to_json
  end

  delete "/dialects/:id" do
    dialect = Dialect.find(params[:id])
    dialect.destroy
  end

end
