//render bookcard view collection

  $(function(){
    // set up model objects
    //var library = new Songs(songData);
    var bookshelf = new Books(bookData.books);
    


    // build a view for the top level of the whole app
    var appshelfView = new BooksView({collection: bookshelf});

    console.log('appshelfView', bookshelf);

    //$('body').append(appshelfView.render());
    $('body').append('hey');

    // put the view onto the screen
    //$('body').append(appshelfView.render());
  });