/**
 * Comment
 *
 * @returns {MethodDecorator}
 */
export function PubSub(config): MethodDecorator {

  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor): PropertyDescriptor => {

    const capture = target[propertyKey].bind(target);

    descriptor.value = (...args) => {
      alert('Merci A vous!');
      return capture(...args);
    };

    console.warn(target);

    return descriptor;
  };
}
