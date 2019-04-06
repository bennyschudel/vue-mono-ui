const CLASS_NAME = 'ui--drop-target';

function bind(el, binding) {
  const { value } = binding;

  const focus = () => {
    if (!el._enabled) {
      return;
    }

    el.classList.add(CLASS_NAME);
  };

  const blur = () => {
    if (!el._enabled) {
      return;
    }

    el.classList.remove(CLASS_NAME);
  };

  el._enabled = Boolean(value);

  el.addEventListener('dragenter', focus, false);
  el.addEventListener('drop', blur, false);
  el.addEventListener('dragleave', blur, false);
}

function update(el, binding) {
  const { value } = binding;

  el._enabled = Boolean(value);
}

export default {
  bind,
  update,
};
