import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext.jsx";
import { useAuthContext } from "../contexts/AuthContext.jsx";
import "./styles/Cart.css";

const Cart = () => {
  const {
    items,
    totalItems,
    totalAmount,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const formatPrice = (price) => {
    if (typeof price === "string") {
      return price;
    }
    return `$${price.toLocaleString()}`;
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      // Si no está autenticado, redirigir a login
      setIsOpen(false);
      navigate("/login", { state: { from: "/pagar" } });
      alert("Debes iniciar sesión para proceder con el pago");
      return;
    }
    setShowCheckout(true);
  };

  const handleContractService = () => {
    // Simulate service contracting
    alert(
      `¡Gracias por contratar nuestros servicios!\n\nTotal: ${formatPrice(
        totalAmount
      )}\n\nNos pondremos en contacto contigo en las próximas 24 horas para coordinar la implementación.`
    );
    clearCart();
    setShowCheckout(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* Cart Toggle Button */}
      <div className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="cart-icon">🛒</span>
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </div>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Carrito de Servicios</h3>
          <button className="cart-close" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="empty-cart">
              <p>Tu carrito está vacío</p>
              <span className="empty-cart-icon">🛒</span>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-info">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-subtitle">{item.subtitle}</p>
                      <p className="item-price">
                        {item.price}
                        {item.period}
                      </p>
                    </div>

                    <div className="item-controls">
                      <div className="quantity-controls">
                        <button
                          className="quantity-btn"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          className="quantity-btn"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                        title="Eliminar del carrito"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="summary-row">
                  <span>Total de servicios:</span>
                  <span>{totalItems}</span>
                </div>
                <div className="summary-row total">
                  <span>Total mensual:</span>
                  <span className="total-amount">
                    {formatPrice(totalAmount)}
                  </span>
                </div>
              </div>

              <div className="cart-actions">
                <button className="clear-cart-btn" onClick={clearCart}>
                  Vaciar Carrito
                </button>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Contratar Servicios
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="checkout-modal">
          <div className="checkout-content">
            <div className="checkout-header">
              <h3>Confirmar Contratación de Servicios</h3>
              <button
                className="modal-close"
                onClick={() => setShowCheckout(false)}
              >
                ✕
              </button>
            </div>

            <div className="checkout-body">
              <div className="service-summary">
                <h4>Resumen de Servicios:</h4>
                {items.map((item) => (
                  <div key={item.id} className="checkout-item">
                    <span className="checkout-service">
                      {item.name} ({item.quantity} mes
                      {item.quantity > 1 ? "es" : ""})
                    </span>
                    <span className="checkout-price">
                      {formatPrice(
                        parseFloat(item.price.replace(/[,$]/g, "")) *
                          item.quantity
                      )}
                    </span>
                  </div>
                ))}
                <div className="checkout-total">
                  <strong>Total Mensual: {formatPrice(totalAmount)}</strong>
                </div>
              </div>

              <div className="contract-info">
                <h4>Información del Contrato:</h4>
                <ul>
                  <li>📋 Contrato mensual renovable</li>
                  <li>🚀 Implementación en 48-72 horas</li>
                  <li>📞 Soporte especializado incluido</li>
                  <li>🔒 Garantía de satisfacción</li>
                  <li>📄 Sin compromiso a largo plazo</li>
                </ul>
              </div>
            </div>

            <div className="checkout-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowCheckout(false)}
              >
                Cancelar
              </button>
              <button className="confirm-btn" onClick={handleContractService}>
                Confirmar Contratación
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay */}
      {(isOpen || showCheckout) && (
        <div
          className="cart-overlay"
          onClick={() => {
            setIsOpen(false);
            setShowCheckout(false);
          }}
        />
      )}
    </>
  );
};

export default Cart;
