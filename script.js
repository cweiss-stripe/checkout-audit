const stripe = window.Stripe("pk_test_fEnfqkUj7brxj0AAGO5Ig8rg", {
  betas: ["checkout_pm_types"]
});

const $ = document.querySelector.bind(document);

const baseParams = {
  successUrl: document.location.href,
  cancelUrl: document.location.href
};

$("#checkout-button-one-sku").addEventListener("click", () =>
  stripe.redirectToCheckout({
    ...baseParams,
    items: [{ sku: "sku_Ex4IdjQZ98J1Pm", quantity: 1 }]
  })
);

$("#checkout-button-two-skus").addEventListener("click", () =>
  stripe.redirectToCheckout({
    ...baseParams,
    items: [
      { sku: "sku_Ex4IdjQZ98J1Pm", quantity: 1 },
      { sku: "sku_ErUItdY4PaJtSE", quantity: 1 }
    ]
  })
);

$("#checkout-button-one-sku-billing-address").addEventListener("click", () =>
  stripe.redirectToCheckout({
    ...baseParams,
    items: [{ sku: "sku_Ex4IdjQZ98J1Pm", quantity: 1 }],
    billingAddressCollection: "required"
  })
);

$("#checkout-button-one-plan").addEventListener("click", () =>
  stripe.redirectToCheckout({
    ...baseParams,
    items: [{ plan: "plan_Dyp9Xm2TRDp5Rt", quantity: 1 }]
  })
);

$("#checkout-button-one-plan-trial").addEventListener("click", () =>
  stripe.redirectToCheckout({
    ...baseParams,
    items: [{ plan: "plan_DypBxyTRFfEUvb", quantity: 1 }]
  })
);

$("#checkout-button-two-plans").addEventListener("click", () =>
  stripe.redirectToCheckout({
    ...baseParams,
    items: [
      { plan: "plan_Dyp9Xm2TRDp5Rt", quantity: 1 },
      { plan: "plan_ELGfwCIygrQlZ8", quantity: 1 }
    ]
  })
);

$("#checkout-button-ideal").addEventListener("click", () =>
  stripe.redirectToCheckout({
    ...baseParams,
    items: [{ sku: "sku_EOdmg3sx2P7OLY", quantity: 1 }],
    paymentMethodTypes: ["ideal"]
  })
);

$("#checkout-button-card-ideal").addEventListener("click", () =>
  stripe.redirectToCheckout({
    ...baseParams,
    items: [{ sku: "sku_EOdmg3sx2P7OLY", quantity: 1 }],
    paymentMethodTypes: ["card", "ideal"]
  })
);
