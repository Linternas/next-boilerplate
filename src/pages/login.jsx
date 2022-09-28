import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useVoucher } from 'src/hooks/queries/sample';

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm({ mode: 'onChange' });

  const { data } = useVoucher('test');

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onValid = (data) => {
    console.log(data);

    if (data.password !== data.passwordcheck) {
      setError(
        'passwordcheck', // 에러 핸들링할 input요소 name
        { message: '비밀번호가 일치하지 않습니다.' }, // 에러 메세지
        { shouldFocus: true } // 에러가 발생한 input으로 focus 이동
      );
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          try {
            console.log(data);
            onValid(data);
          } catch (e) {
            console.log(e);
          }
        })}
      >
        <fieldset>
          <legend>login</legend>

          <label htmlFor="nickname"></label>
          <input
            {...register('nickname', {
              required: '닉네임을 입력해주세요',
              minLength: {
                // value의 최소 길이
                value: 3,
                message: '3글자 이상 입력해주세요.' // 에러 메세지
              }
            })}
            placeholder="닉네임을 입력하세요"
          />
          <p>{errors?.nickname?.message}</p>

          <label htmlFor="id"></label>
          <input
            {...register('id', {
              required: 'ID를 입력해주세요',
              minLength: {
                value: 8,
                message: '8글자 이상 입력해주세요'
              }
            })}
          />
          <p>{errors?.id?.message}</p>

          <label htmlFor="password"></label>
          <input
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              minLength: {
                value: 8,
                message: '8글자 이상 입력해주세요'
              }
            })}
          />
          <p>{errors?.password?.message}</p>

          <label htmlFor="passwordcheck"></label>
          <input
            {...register('passwordcheck', {
              required: '비밀번호 확인을 입력해주세요',
              minLength: {
                value: 8,
                message: '8글자 이상 입력해주세요'
              }
            })}
          />
          <p>{errors?.passwordcheck?.message}</p>

          <button>123</button>
          {/* <button onClick={(e) => e.preventDefault()}>123</button> */}
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
