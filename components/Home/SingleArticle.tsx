import type { NextPage } from "next";
import { Post } from "../../ts/interfaces/globalInterfaces";
import styled from "styled-components";
interface Props {
  post: Post;
}

const SingleArticle: NextPage<Props> = ({ post }) => {
  return (
    <Wrapper id='card' className='card'>
      <div className='image-container'>
        <img className='articleImg' src={post.cover_image} alt='' />
      </div>
      <div className='tags'>
        {post.tag_list.map((tag: string) => {
          return (
            <p className='single-tag' key={tag}>
              {tag}
            </p>
          );
        })}{" "}
      </div>

      <a className='link readMore' href={post.url}>
        Read
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  /* height: fit-content; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--black-color);
  border-radius: var();
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  z-index: 10;

  .image-container {
    overflow: hidden;
  }

  .articleImg {
    width: 100%;
    object-fit: contain;
    transition: var(--transition-1);
  }
  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.3rem;
    text-transform: capitalize;
  }
  .single-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black-color);
    color: var(--white-color);
    padding: 0.1rem 0.2rem;
    border-radius: 0.5rem;
    transition: var(--transition-1);
    font-size: 0.8rem;
    height: 25px;
  }

  .link {
    height: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: var(--black-color); */
    color: var(--white-color);
    padding: 0.1rem 0.2rem;
    transition: var(--transition-1);
    font-size: 0.8rem;
    transform: translateY(40px);
  }
  :hover .link {
    transform: translateY(0);
    background: red;
    height: 25px;
  }
  :hover .articleImg {
    transform: scale(1.5) rotate(-10deg);
  }
`;

export default SingleArticle;
