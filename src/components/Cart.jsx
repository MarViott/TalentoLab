import React, { useState, useEffect } from "react";
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
  const [pendingCheckout, setPendingCheckout] = useState(false);

  // Detectar si el usuario acaba de iniciar sesión y quería pagar
  useEffect(() => {
    // Si el usuario se autentica y tenía pendiente abrir el checkout
    if (isAuthenticated && pendingCheckout && items.length > 0) {
      setIsOpen(true);
      setShowCheckout(true);
      setPendingCheckout(false);
    }
  }, [isAuthenticated, pendingCheckout, items.length]);
  const [paymentData, setPaymentData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "mercado-pago",
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
    acceptTerms: false,
  });

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
      // Si no está autenticado, marcar checkout pendiente y redirigir a login
      setPendingCheckout(true);
      setIsOpen(false);
      navigate("/login", { state: { from: "/pagar" } });
      alert("Debes iniciar sesión para proceder con el pago");
      return;
    }
    setShowCheckout(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleContractService = (e) => {
    e.preventDefault();

    // Validar autenticación primero
    if (!isAuthenticated) {
      alert("Debes iniciar sesión para completar el pago");
      setShowCheckout(false);
      setIsOpen(false);
      navigate("/login", { state: { from: "/pagar" } });
      return;
    }

    // Validar que se hayan aceptado los términos
    if (!paymentData.acceptTerms) {
      alert("Debes aceptar los términos y condiciones para continuar");
      return;
    }

    // Validar campos requeridos
    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "company",
      "address",
      "city",
    ];
    const emptyFields = requiredFields.filter((field) => !paymentData[field]);

    if (emptyFields.length > 0) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    // Validar campos de tarjeta si el método es Mercado Pago
    if (paymentData.paymentMethod === "mercado-pago") {
      if (
        !paymentData.cardNumber ||
        !paymentData.cardHolder ||
        !paymentData.expiryDate ||
        !paymentData.cvv
      ) {
        alert("Por favor completa todos los datos de la tarjeta");
        return;
      }
    }

    // Simulate service contracting
    alert(
      `¡Gracias por contratar nuestros servicios!\n\nTotal: ${formatPrice(
        totalAmount
      )}\nMétodo de pago: ${
        paymentData.paymentMethod === "mercado-pago"
          ? "Mercado Pago"
          : paymentData.paymentMethod === "transfer"
          ? "Transferencia Bancaria"
          : "PayPal"
      }\n\nNos pondremos en contacto contigo en las próximas 24 horas para coordinar la implementación.`
    );
    clearCart();
    setShowCheckout(false);
    setIsOpen(false);
    // Resetear formulario
    setPaymentData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      city: "",
      postalCode: "",
      paymentMethod: "mercado-pago",
      cardNumber: "",
      cardHolder: "",
      expiryDate: "",
      cvv: "",
      acceptTerms: false,
    });
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

              {!isAuthenticated && (
                <div className="auth-warning">
                  <p>
                    🔐 <strong>Inicia sesión</strong> para proceder con la
                    contratación de servicios
                  </p>
                </div>
              )}

              <div className="cart-actions">
                <button className="clear-cart-btn" onClick={clearCart}>
                  Vaciar Carrito
                </button>
                <button className="checkout-btn" onClick={handleCheckout}>
                  {isAuthenticated
                    ? "Contratar Servicios"
                    : "Inicia Sesión para Contratar"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && isAuthenticated && (
        <div className="checkout-modal">
          <div className="checkout-content payment-form-content">
            <div className="checkout-header">
              <h3>Detalle de Pago</h3>
              <button
                className="modal-close"
                onClick={() => setShowCheckout(false)}
              >
                ✕
              </button>
            </div>

            <div className="checkout-body">
              <form onSubmit={handleContractService}>
                {/* Resumen del pedido */}
                <div className="payment-section">
                  <h4>📋 Resumen de Servicios</h4>
                  <div className="service-summary">
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
                </div>

                {/* Información personal */}
                <div className="payment-section">
                  <h4>👤 Información Personal</h4>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="fullName">Nombre Completo *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={paymentData.fullName}
                        onChange={handleInputChange}
                        placeholder="Juan Pérez"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={paymentData.email}
                        onChange={handleInputChange}
                        placeholder="juan@empresa.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Teléfono *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={paymentData.phone}
                        onChange={handleInputChange}
                        placeholder="+54 911 1234 5678"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Empresa *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={paymentData.company}
                        onChange={handleInputChange}
                        placeholder="Nombre de la empresa"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Información de facturación */}
                <div className="payment-section">
                  <h4>📍 Dirección de Facturación</h4>
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label htmlFor="address">Dirección *</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={paymentData.address}
                        onChange={handleInputChange}
                        placeholder="Calle, número, ciudad, provincia, país"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">Ciudad *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={paymentData.city}
                        onChange={handleInputChange}
                        placeholder="Ciudad de Buenos Aires"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="postalCode">Código Postal</label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={paymentData.postalCode}
                        onChange={handleInputChange}
                        placeholder="1414"
                      />
                    </div>
                  </div>
                </div>

                {/* Método de pago */}
                <div className="payment-section">
                  <h4>💳 Método de Pago</h4>
                  <div className="payment-methods">
                    <label className="payment-method-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="mercado-pago"
                        checked={paymentData.paymentMethod === "mercado-pago"}
                        onChange={handleInputChange}
                      />
                      <span>💳 Mercado Pago</span>
                    </label>
                    <label className="payment-method-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="transfer"
                        checked={paymentData.paymentMethod === "transfer"}
                        onChange={handleInputChange}
                      />
                      <span>🏦 Transferencia Bancaria</span>
                    </label>
                    <label className="payment-method-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={paymentData.paymentMethod === "paypal"}
                        onChange={handleInputChange}
                      />
                      <span>💰 PayPal</span>
                    </label>
                  </div>

                  {/* Datos de tarjeta */}
                  {paymentData.paymentMethod === "mercado-pago" && (
                    <div className="card-details">
                      <div className="form-grid">
                        <div className="form-group full-width">
                          <label htmlFor="cardNumber">
                            Número de Tarjeta *
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={paymentData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="1234 5678 9012 3456"
                            maxLength="19"
                            required
                          />
                        </div>
                        <div className="form-group full-width">
                          <label htmlFor="cardHolder">
                            Nombre del Titular *
                          </label>
                          <input
                            type="text"
                            id="cardHolder"
                            name="cardHolder"
                            value={paymentData.cardHolder}
                            onChange={handleInputChange}
                            placeholder="Como aparece en la tarjeta"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="expiryDate">
                            Fecha de Vencimiento *
                          </label>
                          <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={paymentData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/AA"
                            maxLength="5"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="cvv">CVV *</label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={paymentData.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            maxLength="4"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Información para transferencia */}
                  {paymentData.paymentMethod === "transfer" && (
                    <div className="transfer-info">
                      <p>
                        <strong>Datos bancarios para transferencia:</strong>
                      </p>
                      <ul>
                        <li>Banco: BBVA México</li>
                        <li>Cuenta: 0123 4567 8901 2345</li>
                        <li>CLABE: 012180001234567890</li>
                        <li>Beneficiario: TalentoLab S.A. de C.V.</li>
                      </ul>
                      <p className="transfer-note">
                        💡 Una vez realizada la transferencia, envíanos el
                        comprobante a pagos@talentolab.com
                      </p>
                    </div>
                  )}

                  {/* Información para PayPal */}
                  {paymentData.paymentMethod === "paypal" && (
                    <div className="paypal-info">
                      <p>
                        Serás redirigido a PayPal para completar el pago de
                        forma segura.
                      </p>
                      <p className="paypal-note">
                        💡 Email de PayPal: pagos@talentolab.com
                      </p>
                    </div>
                  )}
                </div>

                {/* Términos y condiciones */}
                <div className="payment-section">
                  <label className="terms-checkbox">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={paymentData.acceptTerms}
                      onChange={handleInputChange}
                      required
                    />
                    <span>
                      Acepto los{" "}
                      <a href="/terminos" target="_blank">
                        términos y condiciones
                      </a>{" "}
                      y la{" "}
                      <a href="/privacidad" target="_blank">
                        política de privacidad
                      </a>
                    </span>
                  </label>
                </div>

                {/* Información del contrato */}
                <div className="contract-info">
                  <h4>📄 Información del Contrato:</h4>
                  <ul>
                    <li>📋 Contrato mensual renovable</li>
                    <li>🚀 Implementación en 48-72 horas</li>
                    <li>📞 Soporte especializado incluido</li>
                    <li>🔒 Garantía de satisfacción</li>
                    <li>📄 Sin compromiso a largo plazo</li>
                  </ul>
                </div>

                {/* Botones de acción */}
                <div className="checkout-actions">
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => setShowCheckout(false)}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="confirm-btn">
                    Confirmar Pago - {formatPrice(totalAmount)}
                  </button>
                </div>
              </form>
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
