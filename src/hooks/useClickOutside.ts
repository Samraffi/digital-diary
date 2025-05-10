import { useEffect, RefObject } from 'react';

type ElementType = HTMLElement | null;

export const useClickOutside = (
  ref: RefObject<ElementType>,
  handler: () => void,
  excludeRefs: RefObject<ElementType>[] = []
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      
      // Проверяем, что клик был вне основного элемента
      const isOutside = !ref.current?.contains(target);
      
      // Проверяем, что клик не был по исключенным элементам
      const isNotExcluded = excludeRefs.every(
        excludeRef => !excludeRef.current?.contains(target)
      );

      if (isOutside && isNotExcluded) {
        handler();
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, excludeRefs]);
};

export default useClickOutside;
