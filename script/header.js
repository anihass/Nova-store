export function creatHeader(){
    const currentPage = window.location.pathname.split("/").pop();
    return `<div class="branding">
        <img src="/image/nova_store.jpg" alt="NovaStore" class="logo">
        <span class="Nova">Nova</span>
        <span class="Store">Store</span>        
      </div>
      <div class="search-bar">
        <input class="searchbox" type="text" placeholder="search">  
        <i id="searchicon" class="fa-solid fa-magnifying-glass"></i>         
      </div>
      
      <nav class="navbar">
        <ul>
          <li><a class="home-btn btn ${currentPage === "home.html" ? "active" : ""} " href="/public/home.html"><i id="navIcons" class="fa-solid fa-house"></i>Home</a></li>
          <li><a class="cart-btn btn" href="cart.html"><i id="navIcons" class="fa-solid fa-cart-shopping"></i>About</a></li>
          <li><a class="product-btn btn" href="products.html"><i id="navIcons" class="fa-solid fa-box-open"></i>Products</a></li>
          <li><a class="cart-btn btn" href="cart.html"><i id="navIcons" class="fa-solid fa-cart-shopping"></i>Cart</a></li>
          <li><a class="cart-btn btn" href="cart.html"><i id="navIcons" class="fa-solid fa-credit-card"></i>Checkout</a></li>
          <li><a class="contact-btn btn" href="contact.html"><i id="navIcons" class="fa-solid fa-phone"></i>Contact</a></li>
          <li><a class="cart-btn btn" href="cart.html"><i id="navIcons" class="fa-solid fa-right-to-bracket"></i>Login</a></li>
          <li><a class="cart-btn btn" href="cart.html"><i id="navIcons" class="fa-solid fa-user-plus"></i>Sign up</a></li>
          <li><a class="cart-btn btn" href="cart.html"><i id="navIcons" class="fa-solid fa-user-tie "></i>Admin</a></li>
          <button class="thems-toggle toggle btn"><li><i class="fas fa-sun"></i></li></button>
          <button class="menu-toggle toggle btn"><li>☰</li></button>
        </ul>
      </nav>`
}