define(["namespace", "use!backbone"], function(namespace, Backbone) {
    var
        Book = namespace.module(),
        router;

    Book.Router = Backbone.Router.extend({
        routes: {
            "book/:p": "details"
        },

        details: function(hash){
            var view = new Book.Views.Details({
                model: Library.get(hash)
            });

            view.render(function(el) {
                $("#main").html(el);
            });
        }
    });

    Book.Model = Backbone.Model.extend({});

    Book.Collection = Backbone.Collection.extend({
        model: Book.Model
    });

    Book.Views.Details = Backbone.View.extend({
        template: "app/templates/books/details.html",
        render: function(done){
            var view = this;

            namespace.fetchTemplate(this.template, function(tmpl) {
                view.el.innerHtml = tmpl(view.model.toJSON());

                if (_.isFunction(done)) {
                    done(view.el);
                }
            });
        },
    });

    Book.Views.List = Backbone.View.extend({
        template: "app/templates/books/list.html",
        render: function(done){
            var view = this;

            namespace.fetchTemplate(this.template, function(tmpl) {
                view.el.innerHtml = tmpl({
                    books: view.collection.toJSON()
                });

                if (_.isFunction(done)) {
                    done(view.el);
                }
            });
        }
    });

    router = new Book.Router();

    return Book;
});