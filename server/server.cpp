#include "include/crow_all.h"

int main() {
    crow::App<crow::CORSHandler> api;

    auto& cors = api.get_middleware<crow::CORSHandler>();
    cors.global()
        .headers("X-Custom-Header", "Upgrade-Insecure-Requests")
        .methods("POST"_method, "GET"_method)
        .prefix("/cors")
        .origin("http://localhost:5173");

    /**
     * @route /
     * @method GET
     * @description Returns "Hello World!".
     */
    CROW_ROUTE(api, "/api/")([](){
        return "Hello World!";
    });

    /**
     * @route /user
     * @method GET
     * @method PATCH
     * @param req The HTTP request object.
     * @param res The HTTP response object.
     * @description Returns information about a user based on the 'user' query parameter.
     */
    CROW_ROUTE(api, "/api/user").methods(crow::HTTPMethod::GET)
    ([](const crow::request& req, crow::response& res) {
        // Return information about a user.
        const char* user = req.url_params.get("user");
        
        if (user) {
            res.write("Username:\n" + std::string(user));
        } else {
            res.write("No username found.");
        }

        res.end();
    });

    api.port(18080).multithreaded().run();
}