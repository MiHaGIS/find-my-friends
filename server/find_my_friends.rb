require 'sinatra'
configure { set :server, :puma}
require 'pry'

class FindMyFriends < Sinatra::Application
  @@database = {}

  before do
      headers 'Access-Control-Allow-Origin' => '*'
      content_type :json
    end

  options '*' do
    headers 'Access-Control-Allow-Origin' => '*'
    headers 'Access-Control-Allow-Credentials' => 'true'
    headers 'Access-Control-Allow-Methods' => 'GET, POST, OPTIONS, DELETE, PUT, PATCH'
    headers 'Access-Control-Allow-Headers' => "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    200
  end

  get '/' do
    @@database.to_json
  end

  post '/' do
    params = JSON.parse(request.body.read)
    @@database[params['name']] = { 'lat': params['lat'], 'lng': params['lng'] }
    {status: 'Okay'}.to_json
  end
end
