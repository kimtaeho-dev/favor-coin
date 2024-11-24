export const enum StorageKey {
  FavoriteCoins = 'favorite-coins',
}

export class LocalStorage {
  static setItem<T>(key: StorageKey, value: T) {
    try {
      const serializedValue = JSON.stringify(value);

      if (typeof window !== 'undefined') {
        localStorage.setItem(key, serializedValue);
      }
    } catch (error) {
      console.error(
        `로컬스토리지 내 데이터를 저장하던 중 문제가 발생했습니다.\n대상 Key: ${key}`,
        error,
      );
      throw error;
    }
  }

  static getItem<T>(key: StorageKey) {
    try {
      if (typeof window !== 'undefined') {
        const serializedValue = localStorage.getItem(key);

        if (serializedValue === null) {
          return null;
        }

        return JSON.parse(serializedValue) as T;
      }

      return null;
    } catch (error) {
      console.error(
        `로컬스토리지 내 데이터를 불러오던 중 문제가 발생했습니다.\n대상 Key: ${key}`,
        error,
      );
      throw error;
    }
  }

  static removeItem(key: StorageKey) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`로컬스토리지 내 데이터 삭제 중 문제가 발생했습니다.\n대상 Key: ${key}`, error);
      throw error;
    }
  }

  static clear() {
    try {
      if (typeof window !== 'undefined') {
        localStorage.clear();
      }
    } catch (error) {
      console.error('로컬스토리지 초기화 중 문제가 발생했습니다.', error);
      throw error;
    }
  }
}
